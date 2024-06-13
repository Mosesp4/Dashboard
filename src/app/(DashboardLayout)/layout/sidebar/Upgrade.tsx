import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export const Upgrade = () => {
    return (
        <Box
            display='flex'
            alignItems="center"
            gap={2}
            sx={{ m: 3, p: 3, bgcolor: 'primary.light', borderRadius: '8px' }}
        >
            <>
                <Box >
                    <Typography variant="h5" sx={{width:'100%'}} fontSize='16px' mb={1}>Unlock Xclusive Deals!</Typography>
                    <Button color="primary" target="_blank" href="#" variant="contained" aria-label="logout" size="small">
                        Register today!
                    </Button>
                </Box>
            
            </>
        </Box>
    );
};
