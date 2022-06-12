--USE bavvsia83xxkjbvtnugt;

CREATE TABLE users (
    id INTEGER AUTO_INCREMENT UNIQUE,
    user VARCHAR(200),
    pass VARCHAR(8),
    blo_image LONGBLOB,
    contentType VARCHAR(200)
);

desc users;