s = "Hero"
# Writing to a file

# with open("test.txt", "w") as f:
#     f.write(s)

# fp = open("test.txt", "w")
# fp.write(s)
# fp.close()


# Appending to a file

with open("test.txt", "a") as f:
    f.write(s)

# fp = open("test.txt", "w")
# fp.write(s)
# fp.close()


# Reading to a file

# with open("test.txt", "r") as f:
#     s=f.read()
#     print(s)

# f = open("test.txt", "r")
# s=f.read()
# print(s)
# f.close()

