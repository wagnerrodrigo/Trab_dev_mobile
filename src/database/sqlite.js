import { SQLite } from "expo-sqlite";

const database_name = "notifica.db";
const database_version = "1.0";
const database_displayname = "banco Sqlite sem internet";
const database_size = 200000;

export default class Sqlite {
  initDB() {
    db = SQLite.openDatabase(
      database_name,
      database_version,
      database_displayname,
      database_size
    );

    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE IF NOT EXISTS Content (id integer primary key, name, desc, img)"
      );
    });

    return db;
  }

  closeDatabase(db) {
    if (db) {
      console.log("Closing DB");
      db.close();
    }
  }

  listContents(db) {
    return new Promise((resolve) => {
      const contents = [];

      db.transaction((tx) => {
        tx.executeSql(
          "SELECT c.id, c.name, c.img, c.desc FROM Content c",
          [],
          (_, { rows }) => {
            console.log("Retornou corretamente", rows);

            var len = rows.length;
            for (let i = 0; i < len; i++) {
              let row = rows.item(i);
              console.log(`Content ID: ${row.id}, Content Name: ${row.name}`);

              const { id, name, img, desc } = row;

              contents.push({
                id,
                name,
                img,
                desc,
              });
            }

            console.log(contents);

            resolve(contents);
          }
        );
      });
    });
  }

  addContent(content, db) {
    db.transaction((tx) => {
      tx.executeSql(
        "INSERT INTO Content VALUES (null, ?, ?, ?)",
        [content.name, content.desc, content.img],
        () => {
          console.log("sucesso");
        },
        () => {
          console.log("erro", content);
        }
      );
    });
  }

  updateContent(id, content, db) {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE Content SET name = ?, desc = ?, img = ? WHERE id = ?",
        [content.name, content.desc, content.img, id],
        () => {
          console.log("sucesso");
        },
        () => {
          console.log("erro", content);
        }
      );
    });
  }

  deleteContent(id, db) {
    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM Content WHERE id = ?",
        [id],
        () => {
          console.log("sucesso");
        },
        () => {
          console.log("erro", content);
        }
      );
    });
  }
}
