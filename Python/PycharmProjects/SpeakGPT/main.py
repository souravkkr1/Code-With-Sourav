import os


if __name__ == '__main__':
    print("Welcome to SpeakGPT 1.1. Created by Sourav")
    while True:
        x=input("Enter what you want me to speak: ")
        if x=="q":
            os.system("say 'bye bye friend'")
            break
        command= f"say {x}"
        os.system(command)
