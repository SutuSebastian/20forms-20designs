import { useState } from 'react'
import { Box, Button, Flex, TextField } from 'gestalt'

function OrderTrackingForm() {
  const [orderNumber, setOrderNumber] = useState('')
  const [email, setEmail] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Order lookup submitted!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex direction="column" gap={4}>
        <TextField
          id="gestalt-order-tracking-number"
          label="Order number"
          onChange={({ value }) => setOrderNumber(value)}
          type="text"
          value={orderNumber}
        />
        <TextField
          id="gestalt-order-tracking-email"
          label="Email address"
          onChange={({ value }) => setEmail(value)}
          type="email"
          value={email}
        />
        <TextField
          id="gestalt-order-tracking-postal"
          label="Postal code"
          onChange={({ value }) => setPostalCode(value)}
          type="text"
          value={postalCode}
        />
        <Box>
          <Button color="red" text="Find order" type="submit" />
        </Box>
      </Flex>
    </form>
  )
}

export default OrderTrackingForm
