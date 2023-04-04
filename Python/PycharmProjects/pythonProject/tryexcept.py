try:
    a = int(input("Enter you number: "))
    print(a + 3)
except Exception as e:
    print("some error occured", e)