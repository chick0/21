import fs from "node:fs"

try {
    fs.writeFileSync(
        "build/service-worker.js",
        fs
            .readFileSync("build/service-worker.js", {
                encoding: "utf8",
            })
            .replaceAll(
                "{version}",
                JSON.parse(
                    fs.readFileSync("build/_app/version.json", {
                        encoding: "utf8",
                    })
                ).version ?? Date.now()
            ),
        {
            encoding: "utf8",
        }
    )

    console.log("Version code updated")
} catch {
    console.log("Fail to update version code in `service-worker.js`")
}
