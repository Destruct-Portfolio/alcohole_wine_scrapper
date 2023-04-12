export default class Sleep {
    static async For(seconds) {
        return new Promise((resolve) => {
            setTimeout(resolve, seconds * 1000);
        });
    }
}
