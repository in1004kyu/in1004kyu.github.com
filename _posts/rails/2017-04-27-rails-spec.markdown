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

Rails의 Behaviour-driven Development (BDD)인 Rspec의 설정과 사용법에 대한 듀토리얼입니다. 회사에서는 Teamcity와 연동하여 git에 commit 할 때마다 Rspec 테스트를 자동으로 하게 해놨다. 테스트 프레임워크는 리팩토링할 때 다른 곳에서 나타나는 버그를 잡아주는 역할을 해준다. 

**준비하기**
-------------

설치할것 - RSpec, Capybara, Shoulda-Matchers, Database Cleaner

### **Shoulda-Matchers**
matcher를 하나의 라인으로 간략하게 사용할 수 있게해준다.

Gemfile

{% highlight ruby %}
group :test do
  gem 'shoulda-matchers', '~> 3.0', require: false
end
{% endhighlight %}

spec/rails_helper.rb

{% highlight ruby %}
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

Gemfile

{% highlight ruby %}
group :test do
  gem 'database_cleaner', '~> 1.5'
end
{% endhighlight %}

spec/rails_helper.rb

{% highlight ruby %}
config.use_transactional_fixtures = false
{% endhighlight %}

spec/support/database_cleaner.rb 생성

{% highlight ruby %}
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

Gemfile

{% highlight ruby %}
group :test do  
  gem 'capybara', '~> 2.5'
end
{% endhighlight %}

spec_helper.rb
{% highlight ruby %}
require 'capybara/rspec'
{% endhighlight %}

### **Faker, Factory Gril**
**Faker** : 랜덤한 데이터를 생성 <br>
**Factory girl** : 가짜 객체를 생성. Faker로 랜덤한 데이터를 입력한 객체를 생성할 때 같이 사용한다

Gemfile
{% highlight ruby %}
gem 'faker', '~> 1.6.1'
gem 'factory_girl_rails', '~> 4.5.0'
{% endhighlight %}

<hr>
**테스트하기**
-------------
* Model Specs, Controller Spec, Feature Spec 3가지를 테스트함.

### **Model Specs**
Model를 테스트함. valide를 테스트할 수 있다. User 모델을 예로 들어보자. 먼저 User 템플릿을 factory를 사용해서 만든다.

spec/factories.rb 생성
{% highlight ruby %}
FactoryGirl.define do
  factory :user do
    userid { Faker::Name.name }
    email { Faker::Internet.email }
    password { 'password1' }
  end
end
{% endhighlight %}

spec/models/user_spec.rb 생성

{% highlight ruby %}
require 'rails_helper'
RSpec.describe User, type: :model do  
  describe "validations" do
    let(:user) { FactoryGirl.build(:user) }
    # factories.rb를 참조해 user를 만들어준다

    # email과 userid가 존재하는지에 대한 valide 를 체크.
    it { is_expected.to validate_presence_of(:email) }
    it { is_expected.to validate_presence_of(:userid) }
    
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


### **Controller Specs**

### **Feature Specs**
