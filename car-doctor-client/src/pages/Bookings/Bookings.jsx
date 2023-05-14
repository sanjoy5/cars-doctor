import { useEffect, useState } from "react"
import { useAuthContext } from "../../AuthProvider/AuthProvider"
import BookingRow from "./BookingRow"
import { useNavigate } from "react-router-dom"


const Bookings = () => {
    const { user } = useAuthContext()
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()

    const url = `https://car-doctor-server-six-xi.vercel.app/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('cardoctor-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setBookings(data)
                } else {
                    navigate('/')
                }
            })
    }, [url, navigate])

    const handleDelete = (id) => {
        const procced = confirm('Are You sure want to delete !!!')
        if (procced) {
            fetch(`https://car-doctor-server-six-xi.vercel.app/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully')
                        const remaining = bookings.filter(booking => booking._id !== id)
                        setBookings(remaining)
                    }
                })
        }
    }

    const handleBookingConfirm = (id) => {
        fetch(`https://car-doctor-server-six-xi.vercel.app/bookings/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id)
                    const updated = bookings.find(booking => booking._id === id)
                    updated.status = 'confirm'

                    const newBookings = [updated, ...remaining]
                    setBookings(newBookings)
                }
            })
    }

    return (
        <div className="max-w-7xl mx-auto py-16">

            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody>

                        {
                            bookings?.map(booking => <BookingRow booking={booking} key={booking._id} handleDelete={handleDelete} handleBookingConfirm={handleBookingConfirm}></BookingRow>)
                        }

                    </tbody>


                </table>
            </div>

        </div>
    )
}

export default Bookings