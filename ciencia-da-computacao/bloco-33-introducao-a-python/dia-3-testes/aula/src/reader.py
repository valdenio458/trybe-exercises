import json


def get_all_by_genre(games_data, genre):
    games = []
    for game in games_data:
        if genre in game["Metadata"]["Genres"].split(","):
            games.append(game["Title"])
    return games


def get_all_by_console(games_data, console):
    games = []
    for game in games_data:
        if game["Release"]["Console"] == console:
            games.append(game["Title"])
    return games


def open_and_return_by_publisher(filepath, publisher):
    if not filepath.endswith(".json"):
        raise ValueError("Formato de arquivo inválido")

    try:
        with open(filepath) as file:
            content = json.load(file)
    except FileNotFoundError:
        raise FileNotFoundError("Arquivo inexistente")

    games = []
    for game in content:
        if game["Metadata"]["Publishers"] == publisher:
            games.append(game["Title"])
    return games


if __name__ == "__main__":
    print(len(open_and_return_by_publisher("video_games.json", "Nintendo")))