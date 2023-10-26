import axios from "axios";

export const getThirdPartyAPI = async (orderNumber) => {
    try {

        // Requirement 4
        const url = "https://apis-sandbox.fedex.com/track/v1/trackingnumbers";
        const input = {
            trackingInfo: [
                {
                    trackingNumberInfo: {
                        trackingNumber: orderNumber
                    }
                }
            ],
            includeDetailedScans: true
        };
        const data = JSON.stringify(input);
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "X-locale": "en_US",
                "Authorization": `Bearer ${process.env.TOKEN}`,
            }
        };
        const response = await axios.post(url, data, config);
        return response?.data.output
    } catch (error) {
        console.log(err)
        return err
    }
}
