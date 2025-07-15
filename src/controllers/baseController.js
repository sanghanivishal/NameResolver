/**
 * @author Vishal Sanghani
 * Date: 18/11/23
 */
const _ = require('lodash')
const constants = require("../utils/contants");
const utils = require("../utils/utils");
const {sendMail} = require("../utils/sendMail");
const {request} = require('../utils/request');

exports.search = async (req, res, next) => {
    try {
        const {number, code} = req.query
        let contact = await utils.getContactFromDB(req)
        console.log(contact?.[0]?.name)
        if (!contact || !contact?.[0]?.name) {
            contact = await utils.getContact(code, number)
            utils.saveContact(req, contact)
        }
        // let d = utils.formatContactData(data)
        console.log(number, "contact =>", contact)
        let names = []
        for (let i = 0; i < contact?.[0]?.names?.length; i++) {
            names.push(contact[0].names[i].name)
        }
        res.status(200).json({status: true, message: "Success", timestamp: new Date().getTime(), data: names});
    } catch (e) {
        // console.log("Error 1", e)
        res.status(200).json({status: false, timestamp: new Date().getTime(), message: e || constants.ERROR_MESSAGE});
        // sendMail({function: "flight searchAirport", reqData: JSON.stringify(req.query), error: e.stack})
    }
}

exports.getCountryCode = async (req, res, next) => {
    res.status(200).json({
        status: true,
        message: "Success",
        timestamp: new Date().getTime(),
        data: constants.COUNTRY_CODE
    });
}
