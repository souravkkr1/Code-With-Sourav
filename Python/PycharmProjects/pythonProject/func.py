def greetHello(name, ending):
    print("Hello" + " " + name)
    print(ending)

def letterGenerator(name, date):
    st = f"Hi mam, \nThis is {name} and I will not come to school on {date}."
    print(st)

def average(a, b):
    return (a+b)/2

print("Executing Function...")
greetHello("Sourav", "Thankyou!")
greetHello("Shivam", "Thankyou!")
letterGenerator("Sourav", "5th April")
letterGenerator("Shivam", "10th April")
print(average(34, 23))
print("Done")
