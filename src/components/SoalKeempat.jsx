import React, { useState } from "react";
import { Button, Card, CardContent, Typography, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

const SoalKeempat = () => {
    const [open, setOpen] = useState(false);
    const [joke, setJoke] = useState(null);

    const handleOpen = async () => {
        setOpen(true);
        await fetchJoke();
    };

    const handleClose = () => setOpen(false);

    const fetchJoke = async () => {
        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            if (response.status === 429) {
                setJoke({ setup: "Rate limit exceeded.", punchline: "Please try again later." });
                return;
            }
            const data = await response.json();
            setJoke(data);
        } catch (error) {
            console.error("Error fetching joke:", error);
            setJoke({ setup: "Error occurred.", punchline: "Unable to fetch joke." });
        }
    };

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "10vh" }}>
            <Typography variant="h4" gutterBottom>
                Soal 4. Show Joke
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Show Joke
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Random Joke</DialogTitle>
                <DialogContent>
                    {joke ? (
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{joke.setup}</Typography>
                                <Typography variant="body1">{joke.punchline}</Typography>
                            </CardContent>
                        </Card>
                    ) : (
                        <Typography>Loading...</Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button variant="outlined" color="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="contained" color="primary" onClick={fetchJoke}>
                        Reload Joke
                    </Button>
                    <Button variant="contained" color="error" onClick={reloadPage}>
                        Reload Page
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default SoalKeempat;
