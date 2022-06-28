import { useState } from 'react';
import { Box, Button, Fab, Typography } from '@mui/material';

export default function ItemCount({ stock, initial, onAdd }) {

  const [Count, setCount] = useState(initial)

  const addItem = () => {
    if (Count < stock) {
      setCount( Number(Count) + 1 );
    }
  }

  const removeItem = () => {
    if (Count > 1) {
      setCount( Number(Count) - 1 );
    }
  }

  return (
    <>
      <Box width={190} sx={{ marginX: 'auto' }}>
        <Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '12px',
            }}
          >
            <Fab
              disabled={Count === 0}
              size='small'
              variant='primary'
              onClick={removeItem}
            >
              -
            </Fab>
            <Typography variant="body1" sx={{ userSelect: 'none' }}>
              {Count}
            </Typography>
            <Fab
              disabled={Count === stock}
              size='small'
              variant='primary'
              onClick={addItem}
            >
              +
            </Fab>
          </Box>
          <Button
            disabled={Count === 0}
            variant='primary'
            size='small'
            onClick={() => onAdd(Count)}
          >
            Agregar al carrito
          </Button>
        </Box>
      </Box>
    </>
  )
}
