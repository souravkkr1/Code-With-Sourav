# a = {}
# b= set()
# print(a, type(a))
# print(b, type(b))

dict1 = {"good": "Something pleasant", "fetch": "to bring", "1": "The number 1"}

marks =  {"Harshit": 34, "Sourav": 99, "Shivani": 10, "Smriti": 45, "Naina": 87, "Sankalp": 78}

print(dict1["good"])
print(marks["Sourav"])

marks["Priyanka"] = 34
print(marks)

print(marks.get("Priyanka Chopra"))
# print(marks["Priyanka Chopra"])

print(marks.get("Priyanka"))
print(marks["Priyanka"])
print(marks.values())
print(marks.items())


