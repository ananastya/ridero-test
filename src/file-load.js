export default function loadFile(file) {

    return new Promise(function(resolve, reject) {
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result)
            }
            reader.readAsDataURL(file);
        }
        else {
            resolve()
        }
    });

}