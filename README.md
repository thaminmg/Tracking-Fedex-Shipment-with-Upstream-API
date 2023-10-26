### Tracking Fedex Shipment with Upstream API
## Requirement 7

**Endpoint**: POST https://localhost:8080/track-order

**Request Body Format**:
```json
{
  "orderNumber": "order-number"
}
```

**Request Body Error Format**:
Status Code: 400
```json
{
  "requestError": "Order number is required"
}
```

**Response Body Success Format**:
Status Code: 200
```json
{
  "Tracking Number": "...",
  "Status Detail": "...",
  "City": "...",
  "State": "...",
  "Country": "...",
  "Status": "...",
  "Recipient City": "...",
  "Shipper City": "..."
}
```

**Response Body Error Format**:
Status Code: 500
```json
{
  "responseError": "Error in Upstream API request"
}
```


**Setting up Environment Variables**:
1. Create a .env file in the project's config directory.
2. Add FedEx API Bearer token in the following format:
TOKEN = api-token

### Requirements

1. Set Up the Project
   - Create a new Node.js project.
   - Install Express.js.
   - Initialize a `.env` file to store API keys.

2. Create Environment Variables
   - Store Tracking API keys in the `.env` file.

3. Create API Routes
   - Define an Express route to handle POST requests for tracking details.
   - Parse the JSON body of the incoming request to get the `orderNumber`.
   - Validate that `orderNumber` is provided, returning a 400 response if not.

4. Consume Tracking APIs
   - Use Axios library to make API requests to tracking endpoints.
   - Include the respective API keys in the request headers.
   - Pass the `orderNumber` to the UPS or FedEx API to fetch tracking details.

5. Handle API Responses
   - Handle the responses from Upstream API
   - Parse the data and extract relevant tracking information.
   - Combine the tracking information from both APIs if needed.

6. Error Handling
   - Implement error handling for API requests.
   - Return appropriate error responses if there are issues with API requests.

7. Documentation
   - Provide clear documentation on how to use the API, including the required request format and endpoint.
   - Document the expected response format and status codes.
   - Include instructions on setting up environment variables.

8. Presentation
    - Explain the code and demonstrating how to use the API.