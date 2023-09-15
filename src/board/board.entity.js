class Board {
  id;
  title;
  writer;
  content;
  created_at;
  hit;

  constructor(id, title, writer, content) {
    this.id = id;
    this.title = title;
    this.writer = writer;
    this.content = content;
    this.created_at = new Date();
    this.hit = 0;
  }
}
// entity 부분은 어떠한 형태로 데이터가 저장될지를 정하는 일종의 규격 같은 개념이다.

module.exports = Board;
