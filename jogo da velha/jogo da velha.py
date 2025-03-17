import tkinter as tk
from tkinter import messagebox

# Função para verificar se alguém venceu
def check_winner():
    for i in range(3):
        # Verificar linhas e colunas
        if board[i][0] == board[i][1] == board[i][2] != "":
            return board[i][0]
        if board[0][i] == board[1][i] == board[2][i] != "":
            return board[0][i]

    # Verificar diagonais
    if board[0][0] == board[1][1] == board[2][2] != "":
        return board[0][0]
    if board[0][2] == board[1][1] == board[2][0] != "":
        return board[0][2]

    # Verificar se houve empate
    if all(board[i][j] != "" for i in range(3) for j in range(3)):
        return "Empate"

    return None


# Função para atualizar o botão com o movimento
def make_move(i, j):
    global current_player, winner  # Declarando as variáveis globais
    if board[i][j] == "" and winner is None:
        board[i][j] = current_player
        buttons[i][j].config(text=current_player, bg='red')  # Alterar fundo do botão ao jogar
        winner = check_winner()
        if winner:
            if winner == "Empate":
                messagebox.showinfo("Empate", "O jogo terminou em empate!")
            else:
                messagebox.showinfo("Vencedor", f"O jogador {winner} venceu!")
            reset_game()

        # Alternar jogador
        current_player = "O" if current_player == "X" else "X"


# Função para reiniciar o jogo
def reset_game():
    global board, current_player, winner  # Declarando as variáveis globais
    board = [["" for _ in range(3)] for _ in range(3)]
    for i in range(3):
        for j in range(3):
            buttons[i][j].config(text="", bg='#fff')  # Resetando a cor do botão para inicial
    current_player = "X"
    winner = None


# Inicialização da janela
root = tk.Tk()
root.title("Jogo da Velha")

# Definir o tamanho e a posição da janela
root.geometry("400x400")  # Tamanho da janela
root.eval('tk::PlaceWindow %s center' % root.winfo_toplevel())  # Centraliza a janela

# Definir cor de fundo da janela
root.config(bg='black')

# Tabuleiro 3x3
board = [["" for _ in range(3)] for _ in range(3)]

# Botões do tabuleiro
buttons = [[None for _ in range(3)] for _ in range(3)]

# Criar um frame para centralizar o tabuleiro
frame = tk.Frame(root, bg='#333')  # Cor de fundo do frame
frame.place(relx=0.5, rely=0.5, anchor="center")  # Centraliza o frame

# Função para mudar a cor do botão quando o mouse passar sobre ele
def on_hover(event, button):
    button.config(bg='#333')

def on_leave(event, button):
    button.config(bg='#fff')  # Volta para a cor original

# Criar botões com cores e efeitos de hover
for i in range(3):
    for j in range(3):
        buttons[i][j] = tk.Button(frame, text="", width=12, height=4, font=('Arial', 20, 'bold'),
                                  bg='#fff', activebackground='lightgreen', relief="raised",
                                  command=lambda i=i, j=j: make_move(i, j))
        buttons[i][j].grid(row=i, column=j, padx=5, pady=5)
        # Adicionar efeitos de hover
        buttons[i][j].bind("<Enter>", lambda event, button=buttons[i][j]: on_hover(event, button))
        buttons[i][j].bind("<Leave>", lambda event, button=buttons[i][j]: on_leave(event, button))

# Jogador inicial
current_player = "X"
winner = None  # Inicializando a variável winner

# Iniciar o jogo
root.mainloop()
