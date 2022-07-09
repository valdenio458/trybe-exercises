from src.reader import get_all_by_genre, get_all_by_console
import pytest
import json


@pytest.fixture(scope="session")
def data():
    return []


def test_get_all_by_genre_success(data):
    filtered_games = get_all_by_genre(data, "Simulation")
    assert filtered_games == []


def test_get_all_by_console_success(data):
    filtered_games = get_all_by_console(data, "Nintendo")
    assert filtered_games == []


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
