from socketserver import UDPServer, DatagramRequestHandler


class UDPHandler(DatagramRequestHandler):
    def handle(self):
        # self.wfile.write(b'Hello World!\n')
        # continuar e validar a conexão
        # while True:
        #     # vou ler esse arquivo (rfile)
        #     # ler a linha (readline)
        #     # trabalhar com os dados da tabela (strip)
        #     # decode para string
        #     data = self.rfile.readline().strip().decode('utf-8')
        #     if not data:
        #         self.wfile.write(b'Cliente desconectado')
        #         print('Cliente desconectado')
        #     break
        #     print(data)
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode('utf-8').strip())
            

# vamos fazer o acesso ao servidor
if __name__ == '__main__':
    server_address = ('localhost', 9090)
    with UDPServer(server_address, UDPHandler) as server:        
        server.serve_forever()  # para que o método não pare








