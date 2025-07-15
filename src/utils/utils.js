/**
 * @author Vishal Sanghani
 * Date: 16/02/23
 */
const {request} = require('../utils/request');
const constants = require("./contants");
const _ = require('lodash')
const moment = require('moment');
const {Blob} = require('node:buffer');
const ContactModel = require('../models/contactModel');
const mongoose = require("mongoose");

let token_1 = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE4ZGY2MmQzYTBhNDRlM2RmY2RjYWZjNmRhMTM4Mzc3NDU5ZjliMDEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiVmlzaGFsIFNhbmdoYW5pIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pBRHBpMVNqb2xIWnBrUmNZZnNTRkVhcXVNTHRLWkx4SWF0Q0hBVWNRM3BwZUE5UT1zOTYtYyIsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS92aWV3Y2FsbGVyLWQ5MjA0IiwiYXVkIjoidmlld2NhbGxlci1kOTIwNCIsImF1dGhfdGltZSI6MTc1MjQxNzk5MiwidXNlcl9pZCI6IkM4R3M0RktMTVloZ09xV0dtaHFGR1dwSG9rRzMiLCJzdWIiOiJDOEdzNEZLTE1ZaGdPcVdHbWhxRkdXcEhva0czIiwiaWF0IjoxNzUyNTY5OTMyLCJleHAiOjE3NTI1NzM1MzIsImVtYWlsIjoidmlzaHNhbmdoYW5pQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7Imdvb2dsZS5jb20iOlsiMTA3ODIyNzkxNzU2NDU1OTQ5OTQ5Il0sImVtYWlsIjpbInZpc2hzYW5naGFuaUBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJnb29nbGUuY29tIn19.gViHH-9hQQfmoXRdXemUOtfmtlfJGmXcqZM3DaczmWo10K8lwLDYaOkW20gGNWCphn-JAlfheIZp70Sax-gyY2hqAF1T3EQh5cTOL1RtRdUqaeFFmX5ePkyHs0oIkmcMYFZG1rVcPVGJJohH-_4JTmo506N8EfsSw2DjyKWn3SLfFWwy84uYCe4fsju9XYQZCErYfuynYbX2BEjq_SP2UiFTk3B8Gn-XoB3n68_BOy9Ku-wkwUIQvnxSeco-_-WpK_68DJrOAJpLQfA02UC4kNUqcMy8UPwEU8PFvnS3TVLba5skKXfGPyZ9-GBnGNmE7yDdwuP7IUhS-SJu8Q_iwQ"
let refresh_token = "AMf-vBxnWAJplPcWdejHu8XeYhrig248Kwqbybade3E_Na6OuHg1yXXIxA3Ll3jucbCaFumzKZ6Z4xNv-xXwCMmmwX-H127YOzC7E03aFNt1dCw1vbteORnlEb6lAEO4nNnN5029PdgnJnr1HAz18Gzqzi8MaXHQkTO2QQWL3mKswpj0-wGBpCZr5eZepnzJoAFvbo0FJAw0OlpYRHfDdxdUloK5COCu5Ii53kA589iXSfHY8IYDYzXeOC9TAyjn2vopq71o-vHJLqXE-mT_EJcJFyBe-T-LUBJILFPyyImHVXtJp52gMcrU2rpANFO7WXH9sRRMmaS-_jSAtptTOyi83DAp-m6PGm5YwPZaAKi2TrzHda6qybKpUx4SA9ONPuYZjvg_K5_h1zrBccBOcCOCjVurLf9LpDSWKh-bKXWtC9LBX13X0TkWaOWrpLrD972K8i7SAq8c"; // Set this to your initial refresh token
let refreshIntervalId = null;

/**
 * Refreshes the bearer token using the refresh token API
 * @returns {Promise<string>} The new access token
 */
startAutoRefreshToken()
refreshBearerToken().then(e=>{}).catch(e=>{})

async function refreshBearerToken() {
    if (!refresh_token) throw new Error('No refresh token set');
    const config = {
        method: 'post',
        url: 'https://securetoken.googleapis.com/v1/token?key=AIzaSyCPFzReGnUOLJFLbagQ8A5O0I-_s2Ocpss',
        headers: {
            'Host': 'securetoken.googleapis.com',
            'Accept': '*/*',
            'X-Ios-Bundle-Identifier': 'caller.id.view',
            'Connection': 'keep-alive',
            'X-Client-Version': 'iOS/FirebaseSDK/11.9.0/FirebaseCore-iOS',
            'User-Agent': 'FirebaseAuth.iOS/11.9.0 caller.id.view/1.9.0 iPhone/15.5 hw/iPhone12_1',
            'Accept-Language': 'en',
            'Content-Type': 'application/json',
            'X-Firebase-GMPID': '1:1026277063246:ios:1f1257ce3ef45b82f5611f',
            'Pragma': 'no-cache',
            'Cache-Control': 'no-cache',
        },
        data: JSON.stringify({
            grantType: 'refresh_token',
            refreshToken: refresh_token
        })
    };
    try {
        const response = await request(config);
        if (response.data && response.data.access_token) {
            token_1 = response.data.access_token;
            refresh_token = response.data.refresh_token;
            return token_1;
        } else {
            throw new Error('No access_token in response');
        }
    } catch (e) {
        console.error('Failed to refresh token:', e);
        throw e;
    }
}

/**
 * Starts automatic refresh of the bearer token every 50 minutes (3000 seconds)
 */
function startAutoRefreshToken() {
    if (refreshIntervalId) {
        clearInterval(refreshIntervalId);
    }
    // 50 minutes = 3000 seconds = 3,000,000 ms
    refreshIntervalId = setInterval(() => {
        refreshBearerToken().then(() => {
            console.log('Bearer token refreshed automatically.');
        }).catch((e) => {
            console.error('Auto token refresh failed:', e);
        });
    }, 3000000);
}

function encodeBase64(data) {
    return Buffer.from(data).toString('base64');
}

function decodeBase64(data) {
    return Buffer.from(data, 'base64').toString('ascii');
}

function camelize(str) {
    return str
        .toLowerCase()
        .replace(/([-_][a-z])/g, (ltr) => ltr.toUpperCase())
        .replace(/[^a-zA-Z]/g, '')
}

function camelizeSpace(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
        if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
        return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
}

function padStart(num, len = 2) {
    return `${num}`.padStart(len, '0');
}


function removeKey(obj, remove) {
    for (let prop in obj) {
        if (remove.includes(prop))
            delete obj[prop];
        else if (typeof obj[prop] === 'object')
            removeKey(obj[prop], remove);
    }
    return obj
}


function extractKey(obj, key, value, list) {
    for (let prop in obj) {
        if (typeof obj[prop] === 'string' && prop === key && obj[prop] === value) {
            list.push(obj)
        } else if (typeof obj[prop] === 'object') {
            extractKey(obj[prop], key, value, list);
        }
    }
    return obj
}

function replaceKey(obj, replace) {
    for (let prop in obj) {
        if (Object.keys(replace).includes(prop)) {
            let tmp = JSON.parse(JSON.stringify(obj[prop]));
            delete obj[prop];
            obj[replace[prop]] = tmp
        } else if (typeof obj[prop] === 'object')
            replaceKey(obj[prop], replace);
    }
    return obj
}

const toQueryString = obj => "?".concat(Object.keys(obj).map(e => `${e}=${obj[e]}`).join("&"));

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

function validateCountryCode(req, res, next) {
    try {
        let {code, number} = req.query
        code = code.replace("+", "").toString()
        req.query.code = code
        if (!constants.CODES[code]) {
            let message = "Invalid code provided. code should be from " + constants.CODES.join(", ")
            res.status(200).json({status: false, timestamp: new Date().getTime(), message: message});
            return
        }
        next()
    } catch (e) {
        console.log(e);
        let message = e?.errMsg || constants.ERROR_MESSAGE
        res.status(200).json({status: false, timestamp: new Date().getTime(), message: message});
    }
}

function getContact(code, number) {
    console.log("Phone", code)
    return new Promise((resolve, reject) => {
        let cd = code
        let data = JSON.stringify([{"prefix": code, "number": number}]);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://acr2.y0.com/v3/identify',
            headers: {
                'Host': 'acr2.y0.com',
                'Accept': '*/*',
                'Connection': 'keep-alive',
                'x-signature': '4de3a1e22f9ce2fcc0affd741f12a02394975c684cb9faeaea69520961455d1f',
                'Accept-Language': 'en-IN;q=1.0',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token_1
            },
            data: data
        };


        request(config).then(function (response) {

            resolve(response.data)
        }).catch(function (error) {
            console.log("error 2", error)
            reject(error)
        });
    })
}

function saveContact(req, data) {
    return new Promise(async (resolve, reject) => {
        const {code, number} = req.query
        try {
            let data1 = await ContactModel.findOne({phoneNumber: number.toString(), countryCode: code.toString()})
            // console.log(data?.data?.name)
            if (data1) {
                let filter = {_id: new mongoose.mongo.ObjectId(data1._id)}
                let options = {
                    phoneNumber: number.toString(),
                    countryCode: code.toString(),
                    name: data?.[0]?.name,
                    json: data,
                    update_time: new Date(),
                }
                let phoneData = await ContactModel.findByIdAndUpdate(filter, options)
            } else {
                if (data?.[0]?.name) {
                    const phoneDB = await ContactModel.create({
                        phoneNumber: number.toString(),
                        countryCode: code.toString(),
                        name: data?.[0]?.name,
                        json: data,
                        create_time: new Date(),
                        update_time: new Date(),
                    });
                }
            }

        } catch (e) {
            console.log(e)
        }
    })
}

function getContactFromDB(req) {
    return new Promise(async (resolve, reject) => {
        try {
            const {code, number} = req.query
            let contact = await ContactModel.find({
                countryCode: code.toString(),
                phoneNumber: number.toString()
            }, {}, {sort: {'update_time': 1}})
            console.log(contact)
            if (contact.length > 0) {
                resolve(contact[0].json)
            } else {
                resolve(null)
            }
        } catch (e) {

        }
    })
}

function formatContactData(response) {
    const {contact, photo} = JSON.parse(JSON.stringify(response))
    let data = {}
    if (contact.length > 0) {
        data.fullName = contact[0].name
    }
    data.image = photo?.secure_url
    try {
        let removedElement = contact.shift();
        data.otherNames = contact;
    } catch (e) {

    }
    return data
}

module.exports = {
    removeKey,
    replaceKey,
    toQueryString,
    wait,
    extractKey,
    encodeBase64,
    decodeBase64,
    camelize,
    padStart,
    getContact,
    saveContact,
    getContactFromDB,
    formatContactData,
    validateCountryCode,
    refreshBearerToken,
    startAutoRefreshToken
}
