const fs = require("fs");

const file = "data.txt";

fs.writeFile(file, "Name: Dhruv\nCourse: BTech CSE", (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log("File created");

    fs.readFile(file, "utf8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        console.log("\nFile content:");
        console.log(data);

        fs.appendFile(file, "\nSemester: 3", (err) => {
            if (err) {
                console.log(err);
                return;
            }

            console.log("File updated");

            fs.readFile(file, "utf8", (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("\nUpdated content:");
                console.log(data);

                fs.unlink(file, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }

                    console.log("File deleted");
                });
            });
        });
    });
});