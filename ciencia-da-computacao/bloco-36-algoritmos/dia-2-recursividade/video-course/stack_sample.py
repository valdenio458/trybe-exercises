def a():
    print("Início de a()")
    b()
    print("Fim de a()")


def b():
    print("Início de b()")
    c()
    print("Fim de b()")


def c():
    print("Início de c()")
    print("Fim de c()")


if __name__ == "__main__": # se o arquivo for executado diretamente
    a()