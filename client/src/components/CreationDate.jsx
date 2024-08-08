import React from 'react'
import ReactTimeAgo from 'react-time-ago'

const CreationDate = ({ date }) => {
	return (
		<ReactTimeAgo date={date} locale="en-US" />
	)
}

export default CreationDate;