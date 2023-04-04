# class Employee:
#     salary=1000
#     name="Rohan"
#     def getSalary(self):
#         return self.salary
#
#
# rohan=Employee()
# print(rohan.salary)
# print(rohan.name)


class Employee:
   def __init__(self, name, salary):
       self.name=name
       self.salary=salary

   def getSalary(self):
        print(self.salary)


rohan=Employee("Rohan", 50000)
# print(rohan.salary)
# print(rohan.name)
rohan.getSalary()

sourav=Employee("Sourav", 500000000)
# print(sourav.salary)
# print(sourav.name)'
sourav.getSalary()


