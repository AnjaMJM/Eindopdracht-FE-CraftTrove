export function getRandomDifficulty() {
    const difficulty = ["Beginner", "Intermediate", "Advanced", "Expert"]
    const random = Math.floor(Math.random() * difficulty.length);

    return difficulty[random]
}

export function getRandomMaterial() {
    const materials = [
        "4 balls of 400g merino wool in the colors blue, green, and brown",
        "2 yards of floral pattern cotton fabric for the main body",
        "Embroidery floss in shades of red, yellow, and green",
        "100 meters of natural-colored cotton cord for macramé",
        "Lace trim in ivory color for embellishment",
        "Crochet yarn in variegated shades of purple and pink",
        "Felting wool roving in assorted colors for needle felting",
        "Yarn warp in cotton or linen for weaving",
        "1 yard of silk fabric for the lining",
        "Embroidery fabric in 14-count Aida cloth for cross-stitching",
        "Macramé cord in black color for a sleek look",
        "Crochet thread in metallic silver for a shiny finish",
        "Felt squares in assorted colors for appliqué",
        "Weaving yarn in earthy tones for a natural look",
        "2 meters of tulle fabric for adding volume",
        "Embroidery canvas in 10-count for large-scale projects",
        "Macramé cotton rope in thick and thin varieties for texture",
        "Chunky crochet yarn in neutral shades for a cozy feel",
        "Wool batting for quilting projects",
        "Yarn in gradient colors for ombre effect",
        "Embroidery beads and sequins for embellishment",
        "Macramé rings for hanging planters",
        "Crochet cotton in pastel colors for baby blankets",
        "Felting needle felting wool in roving and batting forms",
        "Cotton yarn in bright colors for summer projects",
        "Embroidery thread in metallic gold for luxurious accents",
        "Embroidery fabric in 14-count Aida cloth"
    ]
    const random = Math.floor(Math.random() * materials.length);

    return materials[random]
}

export function getRandomTools() {
    const tools = [
        "Embroidery hoop with 8-inch diameter",
        "Lace making kit with bobbins, pins, and lace patterns",
        "Crochet hook set with sizes ranging from 3.5mm to 6mm and crochet stitch markers in assorted colors",
        "Felting needle tool kit with foam pad and assorted needles",
        "Weaving loom with wooden frame and 12-inch weaving width",
        "Sewing machine with automatic threading and multiple stitch patterns",
        "Fabric scissors with comfortable grip and sharp blades",
        "Quilting ruler set with various shapes and sizes",
        "Knitting needles in sizes 4mm, 5mm, and 6mm",
        "Tapestry needles for weaving in ends and sewing seams",
        "Weaving shuttle with smooth wooden surface",
        "Sewing pins with glass heads for easy handling",
        "Embroidery scissors with sharp pointed tips",
        "Macramé dowel rod for wall hanging projects",
        "Crochet blocking board with grid lines for accurate sizing",
        "Felting mat for needle felting projects",
        "Weaving comb for pushing down warp threads",
        "Sewing pattern paper for drafting custom designs",
        "Embroidery transfer paper for transferring patterns onto fabric",
        "Macramé plant hanger kit with wooden beads and instructions",
        "Crochet stitch dictionary with stitch diagrams",
        "Felting needle felting starter kit with instructions and wool",
        "Weaving heddle bar for creating shed in rigid heddle looms",
        "Sewing tailor's chalk for marking fabric",
        "Embroidery hoop stand for hands-free stitching",
        "Macramé cord cutter for precision trimming",
        "Crochet blocking pins for shaping and blocking projects",
        "Felting needle felting foam pad for protecting surfaces",
        "Weaving warp thread in cotton or linen",
        "Sewing seam ripper for undoing stitches",
        "Embroidery thimble for pushing needles through tough fabric",
    ]

    const random = Math.floor(Math.random() * tools.length);

    return tools[random]
}

export function getRandomKeywords() {
    const keywords = [
        "Vintage style",
        "Dress",
        "History bounding",
        "Floral",
        "Geometric",
        "Abstract",
        "Doily",
        "Scarf",
        "Paisley",
        "Hat",
        "Argyle",
        "Doll",
        "Damask",
        "Wallhanging",
        "Ikat",
        "Baby",
        "Animals",
        "Bunny",
        "Faux taxidermy"
    ];

    // Generate a random number of difficulties (at least 1, but no more than 6)
    const numKeywords = Math.min(Math.floor(Math.random() * keywords.length) + 1, 6);

    // Shuffling the keywords, to make sure the output is always different
    for (let i = keywords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [keywords[i], keywords[j]] = [keywords[j], keywords[i]];
    }

    // Slice of the first keywords, depending on the number of keywords wanted
    const selectedKeywords = keywords.slice(0, numKeywords);

    // join selectedKeywords with comma
    return selectedKeywords.join(", ")

}

