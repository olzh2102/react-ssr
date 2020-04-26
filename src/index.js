import express from 'express'
import React from 'react'

import { renderToString } from 'react-dom/server'

import Home from './client/components/home'

const app = express()

app.get('/', (req, res) => {
	const content = renderToString(<Home />)

	res.send(content)
})

app.listen(7000, () => {
	console.log('Listening on port 7000')
})
