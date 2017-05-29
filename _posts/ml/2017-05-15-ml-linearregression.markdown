---
layout: post
title:  "Linear regression, hypothesis, cost"
date:   2017-05-15 13:51:12 +0900
description: "tensorflow 스터디 1주차. 기본 용어 설명"
tags:
- Machin learning
- Tensorflow
- Study
---

- Supervised Learning : 훈련 데이터로부터 하나의 함수를 유추해내기 위한 기계학습 방법
- regression : 0 ~ 100 처럼 범위가 있는 데이터
- Hypothesis : Linear할 것이다라고 가설을 세움

1. 가설을 세움 : H(x) = Wx + b -> linear model이라는 모델을 만듦
2. 어떤 가설이 좋은 값(W, b)일까 : 실제 데이터와 가설이 나타내는 데이터와의 거리가 좁을 수록 좋은 가설.
3. cost function : 거리를 측정한것, (H(x) - y)^2 -> 차이의 페널티를 다량 가질 수 있고, 양수만 나옴

- 학습을 한다 : cost가 가장 적은w, b를 조정하는 것

- 목표 : input이 들어왔을때 맞는 output 출력
- 학습할 input/output으로 학습하여 좋은 가설을 배우게 하고(W, b) 좋은 가설로 맞는 output을 출력하게 한다.

{% highlight python %}
import tensorflow as tf
tf.set_random_seed(777)  # for reproducibility

# X and Y data
x_train = [1, 2, 3]
y_train = [1, 2, 3]

# Try to find values for W and b to compute y_data = x_data * W + b
# We know that W should be 1 and b should be 0
# But let TensorFlow figure it out
W = tf.Variable(tf.random_normal([1]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')

# Our hypothesis XW+b
hypothesis = x_train * W + b

# cost/loss function
cost = tf.reduce_mean(tf.square(hypothesis - y_train)) #loss

# Minimize
#An Operation that applies the specified gradients
#Construct a new gradient descent optimizer.
optimizer = tf.train.GradientDescentOptimizer(learning_rate=0.01)
#Add operations to minimize loss by updating var_list., An Operation that updates the variables in var_list. 
train = optimizer.minimize(cost)

# Launch the graph in a session.
sess = tf.Session()
# Initializes global variables in the graph.
sess.run(tf.global_variables_initializer())

# Fit the line
for step in range(2001):
    sess.run(train)
    if step % 20 == 0:
        print(step, sess.run(cost), sess.run(W), sess.run(b))

# Learns best fit W:[ 1.],  b:[ 0.]

'''
0 2.82329 [ 2.12867713] [-0.85235667]
20 0.190351 [ 1.53392804] [-1.05059612]
40 0.151357 [ 1.45725465] [-1.02391243]
...

1920 1.77484e-05 [ 1.00489295] [-0.01112291]
1940 1.61197e-05 [ 1.00466311] [-0.01060018]
1960 1.46397e-05 [ 1.004444] [-0.01010205]
1980 1.32962e-05 [ 1.00423515] [-0.00962736]
2000 1.20761e-05 [ 1.00403607] [-0.00917497]
'''
{% endhighlight %}


{% highlight python %}
# Lab 2 Linear Regression
import tensorflow as tf
tf.set_random_seed(777)  # for reproducibility

# Try to find values for W and b to compute y_data = W * x_data + b
# We know that W should be 1 and b should be 0
# But let's use TensorFlow to figure it out
W = tf.Variable(tf.random_normal([1]), name='weight')
b = tf.Variable(tf.random_normal([1]), name='bias')

# Now we can use X and Y in place of x_data and y_data
# # placeholders for a tensor that will be always fed using feed_dict
# See http://stackoverflow.com/questions/36693740/
X = tf.placeholder(tf.float32, shape=[None])
Y = tf.placeholder(tf.float32, shape=[None])

# Our hypothesis XW+b
hypothesis = X * W + b

# cost/loss function
cost = tf.reduce_mean(tf.square(hypothesis - Y))

# Minimize
optimizer = tf.train.GradientDescentOptimizer(learning_rate=0.01)
train = optimizer.minimize(cost)

# Launch the graph in a session.
sess = tf.Session()
# Initializes global variables in the graph.
sess.run(tf.global_variables_initializer())

# Fit the line
for step in range(2001):
    cost_val, W_val, b_val, _ = \
        sess.run([cost, W, b, train],
                 feed_dict={X: [1, 2, 3], Y: [1, 2, 3]})
#Either a single value if fetches is a single graph element, or a list of values if fetches is a list, or a dictionary with the same keys as fetches if that is a dictionary (described above).                 
    if step % 20 == 0:
        print(step, cost_val, W_val, b_val)

# Learns best fit W:[ 1.],  b:[ 0]
'''
...
1980 1.32962e-05 [ 1.00423515] [-0.00962736]
2000 1.20761e-05 [ 1.00403607] [-0.00917497]
'''

# Testing our model
print(sess.run(hypothesis, feed_dict={X: [5]}))
print(sess.run(hypothesis, feed_dict={X: [2.5]}))
print(sess.run(hypothesis, feed_dict={X: [1.5, 3.5]}))

'''
[ 5.0110054]
[ 2.50091505]
[ 1.49687922  3.50495124]
'''


# Fit the line with new training data
for step in range(2001):
    cost_val, W_val, b_val, _ = \
        sess.run([cost, W, b, train],
                 feed_dict={X: [1, 2, 3, 4, 5],
                            Y: [2.1, 3.1, 4.1, 5.1, 6.1]})
    if step % 20 == 0:
        print(step, cost_val, W_val, b_val)

# Testing our model
print(sess.run(hypothesis, feed_dict={X: [5]}))
print(sess.run(hypothesis, feed_dict={X: [2.5]}))
print(sess.run(hypothesis, feed_dict={X: [1.5, 3.5]}))

'''
1960 3.32396e-07 [ 1.00037301] [ 1.09865296]
1980 2.90429e-07 [ 1.00034881] [ 1.09874094]
2000 2.5373e-07 [ 1.00032604] [ 1.09882331]
[ 6.10045338]
[ 3.59963846]
[ 2.59931231  4.59996414]
'''
{% endhighlight %}


![그래프 예시](/assets/images/ml_graph_tutorial.png)
