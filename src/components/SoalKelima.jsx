import React, { useState } from 'react';
import {
    TextField,
    Button,
    Card,
    CardContent,
    Typography,
    Grid,
} from '@mui/material';

const UserProfileForm = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            name: '',
            email: '',
            age: '',
            address: {
                street: '',
                city: '',
                country: '',
            },
        },
    ]);

    const handleChange = (userId, e) => {
        const { name, value } = e.target;
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId ? { ...user, [name]: value } : user
            )
        );
    };

    const handleAddressChange = (userId, e) => {
        const { name, value } = e.target;
        setUsers((prevUsers) =>
            prevUsers.map((user) =>
                user.id === userId
                    ? {
                            ...user,
                            address: { ...user.address, [name]: value },
                        }
                    : user
            )
        );
    };

    const addNewUser = () => {
        const newUser = {
            id: users.length + 1,
            name: '',
            email: '',
            age: '',
            address: {
                street: '',
                city: '',
                country: '',
            },
        };
        setUsers((prevUsers) => [...prevUsers, newUser]);
    };

    const removeUser = (userId) => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted users:', users);
    };

    return (
        <form onSubmit={handleSubmit}>
             <Typography variant="h4" gutterBottom>
                            Soal 5. User Profile Form
                        </Typography>
            <Grid container spacing={2}>
                {users.map((user) => (
                    <Grid item xs={12} key={user.id}>
                        <Card variant="outlined">
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    User ID: {user.id}
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Name"
                                            name="name"
                                            value={user.name}
                                            onChange={(e) =>
                                                handleChange(user.id, e)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="email"
                                            type="email"
                                            value={user.email}
                                            onChange={(e) =>
                                                handleChange(user.id, e)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Age"
                                            name="age"
                                            type="number"
                                            value={user.age}
                                            onChange={(e) =>
                                                handleChange(user.id, e)
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                <Typography variant="subtitle1" gutterBottom>
                                    Address
                                </Typography>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth
                                            label="Street"
                                            name="street"
                                            value={user.address.street}
                                            onChange={(e) =>
                                                handleAddressChange(user.id, e)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth
                                            label="City"
                                            name="city"
                                            value={user.address.city}
                                            onChange={(e) =>
                                                handleAddressChange(user.id, e)
                                            }
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <TextField
                                            fullWidth
                                            label="Country"
                                            name="country"
                                            value={user.address.country}
                                            onChange={(e) =>
                                                handleAddressChange(user.id, e)
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                <Button
                                    variant="contained"
                                    color="error"
                                    onClick={() => removeUser(user.id)}
                                    style={{ marginTop: '10px' }}
                                >
                                    Remove User
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={addNewUser}
                        style={{ marginRight: '10px' }}
                    >
                        Add New User
                    </Button>
                    <Button variant="contained" color="success" type="submit">
                        Save All Users
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default UserProfileForm;