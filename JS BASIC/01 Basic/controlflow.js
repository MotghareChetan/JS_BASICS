//control flow
let browser = "Edge"

if (browser === "Chrome") {
    console.log("Test is running on Chrome")
} else if (browser === "Firefox") {
    console.log("Test is running on Firefox")
}
else if (browser === "EDGE") {
    console.log("Test is running on the EDGE")
}
else {
    console.log(`${browser} is not available`)
}

switch (browser) {
    case "Chrome":
        console.log("Test is running on Chrome")
        break;

    case "Firefox":
        console.log("Test is running on Firefox")
        break;
    case "Edge":
        console.log("Test is running on Edge")
        break;
    default:
        console.log(`${browser} is not available`)
        break;
    
}