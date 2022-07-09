from src.reader import open_and_return_by_publisher
import pytest
from unittest.mock import patch, mock_open
import json


@pytest.fixture(scope="session")
def fake_data():
    return []


def test_invalid_format():
    with pytest.raises(ValueError, match="Formato"):
        open_and_return_by_publisher('reader.py', 'publisher')


def test_file_not_found():
    with pytest.raises(FileNotFoundError, match="inexistente"):
        open_and_return_by_publisher('reader.json', 'publisher')


def test_mocking_file_open(fake_data):
    json_content = json.dumps(fake_data)
    with patch('builtins.open', mock_open(read_data=json_content)):
        filtered_games = open_and_return_by_publisher('read.json', 'publisher')
        expected = []
        assert filtered_games == expected
