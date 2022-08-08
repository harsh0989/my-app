import { Button, CardMedia, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import ModalComp from './ModalComp'
import ResponsivePlayer from './ResponsivePlayer';
import VideoModal from './VideoModal';

const VideoPlayer = () => {
    const [muted, setMuted] = useState(true)
    const [icon, setIcon] = useState(false)
    const [videoEnd, setVideoEnd] = useState(false)
    const [url, setUrl] = useState('https://drive.google.com/uc?export=download&id=10Alzm1YuTTZVujP8qrdkf2zvOYb_HiJ_')
    const clickHandle = () => {
        setMuted(!muted)
    }
    const [modalValue, setModalValue] = useState(0)
    const [endOfVid2, setEndOfVid2] = useState(false)
    const [modalUrl, setModalUrl] = useState('')
    const [openModal, setOpenModal] = useState(false);
    const [open, setOpen] = useState(false);
    const handleModalOpen = (e) => {
        let value = e.target.value
        setOpen(true)
        setModalValue(value)
    };
    const handleClose = () => setOpen(false);
    const handleCloseVideoModal = () => setOpenModal(false)
    const endOfVid = () => {
        if (url === 'https://drive.google.com/uc?export=download&id=10Alzm1YuTTZVujP8qrdkf2zvOYb_HiJ_') {
            setVideoEnd(true)
        }
        else {
            setEndOfVid2(true)
        }
    }
    const playVideo2 = () => {
        setVideoEnd(false)
        setUrl('https://drive.google.com/uc?export=download&id=10Hh-uGwArmDfdXpbwWzp3okVPK2kVEI1')
    }
    const handleClick = (e) => {
        let value = e.target.value
        setModalUrl(`${value}`)
        setOpenModal(true)
    }
    return (
        <>
                

                    <Grid container sx={{ height: '96vh' }}>
                        <Grid item sm={6} md={7} sx={{ display: { xs: 'none', sm: 'flex' }, flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
                            <CardMedia component='img' src="https://drive.google.com/uc?export=download&id=1MH-LS8nOrEQW3H6ZNphxL9VU4DqUFXqx" sx={{ width: '25vw' }} />
                            <Typography sx={{ fontWeight: 'bold', fontStyle: 'italic', color: '#2E476E', fontSize: { xs: '10px', sm: '16px', md: '24px' }, paddingLeft: '4%' }}>Video Streaming | Digital Transformation | Web3 | AI, ML & DL | Interactive User Interfaces</Typography>
                            <Grid item sx={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: '4%', width: '100%', marginTop: '3%' }}>
                                <Button sx={{ color: 'white', backgroundColor: '#2E476E', width: '30%', padding: '10px 0', '&:hover': { color: 'white', backgroundColor: '#2E476E' }, borderRadius: '7px', marginRight: '5%' }} onClick={handleModalOpen} value='1'>Button 1</Button>
                                <Button sx={{ color: 'white', backgroundColor: '#2E476E', width: '30%', padding: '10px 0', '&:hover': { color: 'white', backgroundColor: '#2E476E' }, borderRadius: '7px' }} onClick={handleModalOpen} value='2'>Button 2</Button>
                                <ModalComp open={open} handleClose={handleClose} text={modalValue} />
                            </Grid>
                        </Grid>
                        <Grid item md={1} />
                        <Grid item sx={{ display: 'flex', width: '100%', position: 'relative', justifyContent: 'center' }} sm={6} md={4} xs={12}>
                            <ResponsivePlayer icon={icon} setIcon={setIcon} endOfVid={endOfVid} muted={muted} setMuted={setMuted} url={url} />
                            {icon && muted ? <VolumeOffIcon sx={{ position: 'absolute', zIndex: '1', top: { md: '2.5%', sm: '6%' }, right: { md: '5%', sm: '4%', xs: '15%' } }} onClick={clickHandle} /> : icon && <VolumeUpIcon sx={{ position: 'absolute', zIndex: '1', top: { md: '2.5%', sm: '6%' }, right: { md: '5%', sm: '4%', xs: '15%' } }} onClick={clickHandle} />}
                            {videoEnd ? <Button sx={{ position: 'absolute', zIndex: '1', bottom: { md: '2.5%', sm: '5%', xs: '7%' }, right: '15%', backgroundColor: 'white', color: '2E476E', '&:hover': { backgroundColor: 'white', color: '2E476E' }, width: '70%' }} onClick={playVideo2}> Welcome</Button> : <></>}
                            {endOfVid2 ? <>
                                <Button value="https://drive.google.com/uc?export=download&id=10VX874ZfvTgN4WtoXdxcVqgp8A8sS-zs" sx={{ position: 'absolute', zIndex: '1', bottom: { md: '22%', sm: '23%', xs: '28%' }, right: '15%', backgroundColor: 'white', color: '2E476E', '&:hover': { backgroundColor: 'white', color: '2E476E' }, width: '70%' }} onClick={handleClick}>Button 3</Button>
                                <Button value="https://drive.google.com/uc?export=download&id=10_if4SvnNgdWL9srDRgbRTPmXXLtAY5h" sx={{ position: 'absolute', zIndex: '1', bottom: { md: '15.5%', sm: '17%', xs: '21%' }, right: '15%', backgroundColor: 'white', color: '2E476E', '&:hover': { backgroundColor: 'white', color: '2E476E' }, width: '70%' }} onClick={handleClick}>Button 4</Button>
                                <Button value="https://drive.google.com/uc?export=download&id=10fERwTP5CQFZ1p8Op3jqMA806Yjtkfsz" sx={{ position: 'absolute', zIndex: '1', bottom: { md: '9%', sm: '11%', xs: '14%' }, right: '15%', backgroundColor: 'white', color: '2E476E', '&:hover': { backgroundColor: 'white', color: '2E476E' }, width: '70%' }} onClick={handleClick}>Button 5</Button>
                                <Button value="https://drive.google.com/uc?export=download&id=10feRKgONbsy7rUrGvtzwzv1MXTzKPiX6" sx={{ position: 'absolute', zIndex: '1', bottom: { md: '2.5%', sm: '5%', xs: '7%' }, right: '15%', backgroundColor: 'white', color: '2E476E', '&:hover': { backgroundColor: 'white', color: '2E476E' }, width: '70%' }} onClick={handleClick}>Button 6</Button>
                            </>
                                : <></>}
                            <VideoModal open={openModal} url={modalUrl} handleClose={handleCloseVideoModal} setIcon={setIcon} />
                        </Grid>
                    </Grid>
        </>
    )
}

export default VideoPlayer