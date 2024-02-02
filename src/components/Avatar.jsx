import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function FallbackAvatars() {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar
                sx={{ background: 'linear-gradient(to right, #667eea, 0, #6b8dd6, #8e37d7)', cursor:"pointer" }}
                alt="Remy Sharp"
                src="/broken-image.jpg"
            />
        </Stack>
    );
}