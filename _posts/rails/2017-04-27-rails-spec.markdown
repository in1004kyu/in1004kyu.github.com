---
layout: post
title:  "RSpec 정리"
date:   2017-04-26 13:51:12 +0900
description: "Rails의 Behaviour-driven Development (BDD)인 Rspec의 설정과 사용법에 대한 듀토리얼입니다."
tags:
- ruby-on-rails
- RSpec
- BDD
---

<div id="toc"><p class="toc_title">목차</p></div>

Rails의 Behaviour-driven Development (BDD)인 Rspec의 설정과 사용법에 대한 듀토리얼입니다. 근무중인 회사에서 Teamcity와 연동하여 git에 commit 할 때마다 Rspec 테스트를 자동으로 하게 해놨다. 테스트 프레임워크는 리팩토링할 때 다른 곳에서 나타나는 버그를 잡아주는 역할을 해준다. 사실 rspec 설정을 어렵지 않고 테스트 케이스 만드는 작업이 시간이 오래 걸린다. 보통 에러가 나는 엣지 케이스(최소값, 최대값), 에러가 안나는 정상 경우, 에러가 나는 경우, 특정 경우에 따른 분기 테스트 정도를 한다.


**준비하기**
-------------

설치할것 - RSpec, Capybara, Shoulda-Matchers, Database Cleaner

### **Shoulda-Matchers**
matcher를 하나의 라인으로 간략하게 사용할 수 있게해준다.



{% highlight ruby %}
### Gemfile

group :test do
  gem 'shoulda-matchers', '~> 3.0', require: false
end
{% endhighlight %}



{% highlight ruby %}
### spec/rails_helper.rb

require 'shoulda/matchers'

Shoulda::Matchers.configure do |config|
  config.integrate do |with|
    with.test_framework :rspec
    with.library :rails
  end
end
{% endhighlight %}


### **Database Cleaner**
테스트시 디비의 상태를 깨끗하게 해준다.

{% highlight ruby %}
### Gemfile

group :test do
  gem 'database_cleaner', '~> 1.5'
end
{% endhighlight %}



{% highlight ruby %}
### spec/rails_helper.rb

config.use_transactional_fixtures = false
{% endhighlight %}

{% highlight ruby %}
### spec/support/database_cleaner.rb

RSpec.configure do |config|

  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end

  config.before(:each, :js => true) do
    DatabaseCleaner.strategy = :truncation
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end
end
{% endhighlight %}

### **Capybara**
사용자의 행동을 시뮬레이션하는 테스트를 생성해주는 프레임워크. 
gem에서 `:test` 그룹에 넣어주자.

{% highlight ruby %}
### Gemfile

group :test do  
  gem 'capybara', '~> 2.5'
end
{% endhighlight %}

{% highlight ruby %}
### spec_helper.rb

require 'capybara/rspec'
{% endhighlight %}

### **Faker, Factory Gril**
**Faker** : 랜덤한 데이터를 생성 <br>
**Factory girl** : 가짜 객체를 생성. Faker로 랜덤한 데이터를 입력한 객체를 생성할 때 같이 사용한다


{% highlight ruby %}
### Gemfile

gem 'faker', '~> 1.6.1'
gem 'factory_girl_rails', '~> 4.5.0'
{% endhighlight %}

<hr>
**테스트하기**
-------------
* Model Specs, Controller Spec, Feature Spec 3가지를 테스트함.

### **Model Specs**
Model를 테스트함. valide를 테스트할 수 있다. User 모델을 예로 들어보자. 먼저 User 템플릿을 factory를 사용해서 만든다. 팩토리로 만든 user로 테스트를 할 거다.

{% highlight ruby %}
### spec/factories.rb

FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { 'password1' }
  end
end
{% endhighlight %}

{% highlight ruby %}
### spec/models/user_spec.rb

require 'rails_helper'
RSpec.describe User, type: :model do  
  describe "validations" do
    let(:user) { FactoryGirl.build(:user) }
    # factories.rb를 참조해 user를 만들어준다

    # email과 userid가 존재하는지에 대한 valide 를 체크.
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:name) }
    
    it '잘못된 이메일' do
      user.email = 'invalid_mail'
      expect(user).not_to be_valid
      expect(user).to have(1).errors_on(:email)
      expect(user.errors.messages[:email].join).to include('잘못된 이메일 형식입니다')
    end

    it '단순한 비밀번호' do
      user.password = '123456'
      expect(user).not_to be_valid
      expect(user).to have(1).errors_on(:password)
      expect(user.errors.messages[:password].join).to include('영문/숫자 등을 조합해 주세요.')
    end      
  end
end

{% endhighlight %}

user의 email과 userid의 존재해야하는 validate_presence_of를 만족하는것에 대한 테스트, email과 password의 입력형식에 대한 테스트이다. user 모델에 email,userid의 validate 설정이 되어 있어야하고, email, password의 validate와 에러 메시지가 설정되어있어한다. 서비스에 구현한 모델을 테스트해보자.

터미널에서 테스트한다
<pre>
rspec spec/models/contact_spec.rb
</pre>

위 예제에서 `describe`는 테스트 그룹을 만든다. 인자로 모델, 타입을 넘길 수 있다.
{% highlight ruby %}
RSpec.describe User, type: :model do
..
{% endhighlight %}
내부에도 describe를 만들수 있다. user 예제에서는 user 모델에서 validation을 테스트할 그룹을 만든것이다.

`it`는 하나의 테스트 케이스를 나타낸다. 위 예제에선 잘못된 이메일이 나타나는 경우와 단순한 비밀번호일 경우를 테스트한 것이다. `it`는 `context`와 조합을 해서 사용한다. 뒤에서 다루겠지만 `context`는 `언제`를 나타낸다. 단순한 validate를 체크할 때는 `shoulda-matchers`를 사용해서 코드를 줄일 수 있다.

{% highlight ruby %}
it "email이 존재" do
  expect(user).to validate_presence_of(:email)
end
{% endhighlight %}

위 코드는 email의 validate_presence_of 테스트이다. 단순한 validate 체크이기 때문에 아래와 같이 줄일 수 있으며, `shoulda-matchers`가 이를 가능하게 해준다.

{% highlight ruby %}
it { is_expected.to validate_presence_of(:email) }
{% endhighlight %}

`expect`는 아웃풋이 뭔지를 판단한다. tdd에서 `assert.~~`의 역할을 한다고 보면된다. `expect`는 `.to`, `.not_to`등을 사용해서 [matcher][matcher](`be_valid, have(1).errors_on(), include(), eq()` 등)의 결과물의 판단 유무를 리턴한다. 즉 matcher의 결과와 같냐 틀리냐에 대한 예측에 따라 테스트의 통과 유무를 판단한다.

### **Controller Specs**
컨트롤러의 `get/post` 함수가 제대로 동작하는지, 혹은 render를 한다면 어떤 `view/layout`을 랜드하는지, 어떤 내용을 담아야하는지 혹은 `create`를 한다면 제대로 추가가 됐는지 를 테스트한다. 본 예제에서는 `post` 컨트롤러가 있다고 가정하고 테스트해보자. 각자 가지고 있는 컨트롤러를 테스트하면 된다. 


{% highlight ruby %}
### spec/controllers/post_controller_spec.rb

require 'rails_helper'

RSpec.describe PostController, type: :controller do
  render_views
  let(:user) { FactoryGirl.build(:user)}
  let(:post) { FactoryGirl.create(:post) }

  describe 'show' do    
    before do
      sign_in user
    end
    it "post 페이지 보인다" do
      get :show, :id => post.id
      expect(response).to have_http_status :success
    end
  end  
end
{% endhighlight %}

factory를 사용하려면 factories.rb에 추가해줘야하는것을 잊지말자.

{% highlight ruby %}
### factories.rb

FactoryGirl.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Internet.email }
    password { 'password1' }
  end
  factory :post do
    ..
  end  
end
{% endhighlight %}
위 예제는 `post` 컨트롤러에서 `show`를 하면 잘 동작하는것을 테스트하는 것이다. `before` 블록은 테스트 하기전에 수행할 블록이다. `sign_in`은 해당 유저로 로그인하는데, 만약 해당 컨트롤러에서 유저의 로그인 여부 코드가 있다면 이를 통해 테스트 할 수 있다. `sign_in`이 만약 없는 함수로 에러가 나면 아래 설정을 추가해 주면 된다. 


{% highlight ruby %}
### spec/rails_helper.rb

config.include Devise::Test::ControllerHelpers, :type => :controller
{% endhighlight %}

각 함수에 params을 넘기고 싶으면 `params: {key: value, key: value}`로 하면되지만, router에서 필요로 하는 params (주로 id)는 위 예처럼 `:id => post.id` 로 넘겨줘야 에러가 안난다. rails4 에서만 이러는듯 하다. 다 넘겨주고 싶으면 
{% highlight ruby %}
get :show, :id => post.id, params: {key: value, key: value}
{% endhighlight %}
하면된다. 


터미널에서 테스트
<pre>
rspec spec/controllers/post_controller_spec.rb
</pre>

### **Feature Specs**

작성중..



[matcher]: https://www.relishapp.com/rspec/rspec-expectations/docs/built-in-matchers