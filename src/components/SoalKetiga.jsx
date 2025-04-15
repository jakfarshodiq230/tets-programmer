import React, { useState } from "react";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const SoalKetiga = () => {
    const [input, setInput] = useState("");
    const [avatarUrl, setAvatarUrl] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleGenerateAvatar = () => {
        if (input.trim().length > 0) {
            const url = `https://robohash.org/${input}`;
            setAvatarUrl(url);
        } else {
            setAvatarUrl("");
        }
    };

    return (
        <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "50px" }}>
            <Typography variant="h4" gutterBottom>
                Soal 3. Avatar Generator
            </Typography>
            <Box display="flex" justifyContent="center" alignItems="center" gap={2} marginBottom={2}>
                <TextField
                    label="Enter text..."
                    variant="outlined"
                    value={input}
                    onChange={handleInputChange}
                    fullWidth
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleGenerateAvatar}
                >
                    Generate
                </Button>
            </Box>
            <Box marginTop={2}>
                {avatarUrl && <img src={avatarUrl} alt="Avatar" style={{ maxWidth: "100%" }} />}
            </Box>
        </Container>
    );
};

export default SoalKetiga;