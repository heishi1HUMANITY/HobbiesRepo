def mean(data):
    sum = 0
    for i in data:
        sum += i
    return sum / len(data)

def deviation(data):
    m = mean(data)
    return [(i - m) for i in data]

def variance(data):
    d = deviation(data)
    sum = 0
    for i in d:
        sum += i ** 2
    return sum / len(data)

def sqrt(x):
    n = 5
    while(True):
        n1 = n - ((n ** 2 - x) / (2 * n))
        if((n - n1) ** 2 < 1e-10):
            n = n1
            break
        n = n1
    return n

def stdev(data):
    v = variance(data)
    return sqrt(v)

data = [354,347,348,352,344,350,351,349,348,347]
print(mean(data))
print(deviation(data))
print(variance(data))
print(stdev(data))
