const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
/*  const result = {};

    function countSubdomains(domainParts) {
        if (domainParts.length === 0) {
            return;
        }

        let subdomain = '.' + domainParts.join('.');
        if (result[subdomain]) {
            result[subdomain]++;
        } else {
            result[subdomain] = 1;
        }

        domainParts.shift();
        countSubdomains(domainParts);
    }

    for (let i = 0; i < domains.length; i++) {
        const domainParts = domains[i].split('.').reverse();
        countSubdomains(domainParts);
    }

    for (const key in result) {
        if (result.hasOwnProperty(key)) {
            if (!domains.includes(key.substring(1))) {
                delete result[key];
            }
        }
    }

    return result;*/
    throw new NotImplementedError('Not implemented');
}

module.exports = {
  getDNSStats
};
