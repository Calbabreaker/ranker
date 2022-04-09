export function getRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

const K_FACTOR = 30;

/**
 * Calculates the probabilty of the a to win based on a and b's ratings.
 */
export function getExpected(a, b) {
    return 1 / (1 + 10 ** ((b - a) / 400));
}

/**
 * Calculates the new rating based on expected probabilty, the result and the current rating.
 *
 * @param expected - The expected probabilty of winning from the getExpected function
 * @param actual - The result (0 = loss, 1 = win, 0.5 = draw)
 * @param current - The current rating.
 */
export function updateRating(expected, actual, current) {
    return Math.round(current + K_FACTOR * (actual - expected));
}
