import express from 'express';
import { getThirdPartyAPI } from '../controller/getThirdPartyAPI.js';

export const trackOrder = express.Router();

trackOrder.post('/track-order', async (req, res) => {

    const orderNumber = req.body.orderNumber;
    try {
        // Requirement 3
        if (!orderNumber) {
            return res.status(400).json({ requestError: 'Order number is required' });
        } else if (orderNumber) {
            const upstreamRes = await getThirdPartyAPI(orderNumber);
            // Requirement 5
            // Extract relevant information from the JSON
            const trackingNumber = upstreamRes.completeTrackResults[0].trackingNumber;
            const statusDetail = upstreamRes.completeTrackResults[0].trackResults[0].latestStatusDetail;
            const city = statusDetail.scanLocation.city;
            const state = statusDetail.scanLocation.stateOrProvinceCode;
            const country = statusDetail.scanLocation.countryName;
            const status = statusDetail.description;
            const recipientCity = upstreamRes.completeTrackResults[0].trackResults[0].recipientInformation.address.city;
            const shipperCity = upstreamRes.completeTrackResults[0].trackResults[0].shipperInformation.address.city;

            return res.send({
                "Tracking Number": trackingNumber,
                "Status Detail": statusDetail,
                "City": city,
                "State": state,
                "Country": country,
                "Status": status,
                "Recipient City": recipientCity,
                "Shipper City": shipperCity
            });
        }
    } catch (err) {
        // Requirement 6
        return res.status(500).json({ responseError: 'Error in Upstream API request' });
    }
});