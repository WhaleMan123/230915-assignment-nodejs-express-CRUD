const boardRepository = require("./board.repository");

exports.create = (data) => {
  const { title, writer, content } = data;
  const result = boardRepository.create(title, writer, content);
  return result;
};

exports.getFindOne = (board_id) => {
  const id = parseInt(board_id, 10);
  const result = boardRepository.findOne(id);
  boardRepository.incrementHit(id);
  return result;
};

exports.getFindAll = () => {
  const result = boardRepository.findAll();
  return result;
};

exports.update = (id, data) => {
  // console.log(data);
  const { title, content } = data;
  const result = boardRepository.update(id, title, content);
  return result;
};

exports.delete = (id) => {
  boardRepository.delete(parseInt(id, 10));
};
