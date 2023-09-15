const Board = require("./board.entity.js");

const data = [];

const latestId = () => {
  if (data.length === 0) {
    return 1;
  } else {
    const ids = [];
    data.forEach((item) => {
      ids.push(parseInt(item.id, 10));
    });
    ids.sort((a, b) => {
      return a - b;
    });
    return ids[ids.length - 1] + 1;
  }

  // return data.length + 1;
};

// module.exports = ~~ 형태로 해도 되지만
// 이렇게 바로 exports.~~ 형태로 해도 된다.
// 이것이 실수를 방지할 수 있어서, 더 좋은 방법이 될 수도 있다고 한다.

exports.findAll = () => {
  return data;
};

exports.findOne = (id) => {
  const [board] = data.filter((row) => {
    return row.id === id;
  });
  return board;
};

exports.incrementHit = (id) => {
  const index = data.findIndex((v) => {
    return v.id === id;
  });
  data[index].hit += 1;
};

exports.create = (title, writer, content) => {
  const id = latestId();
  const board = new Board(id, title, writer, content);
  data.push(board);

  return board;
};

exports.update = (id, updatedTitle, updatedContent) => {
  const [board] = data.filter((row) => {
    return row.id === parseInt(id);
  });
  // console.log(board);
  const index = data.findIndex((value) => {
    return value.id === parseInt(id);
  });
  board.title = updatedTitle;
  board.content = updatedContent;
  board.created_at = new Date();
  // console.log(board);

  data.splice(index, 1, board);
  // console.log(data);
  return board;
};
exports.delete = (id) => {
  const index = data.findIndex((value) => {
    return value.id === id;
  });
  data.splice(index, 1);
};
