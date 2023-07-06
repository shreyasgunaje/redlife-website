import SvgIcon from '@mui/material/SvgIcon';

export function CarouselPrevIcon(props) {
    return (
        <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16">
            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H0V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(16 16) rotate(180)" fill="#fff" />
        </SvgIcon>
    );
}

export function CarouselNextIcon(props) {
    return (
        <SvgIcon {...props} width="16" height="16" viewBox="0 0 16 16">
            <path id="Path_10" data-name="Path 10" d="M8,16,6.545,14.545l5.506-5.506H0V6.961H12.052L6.545,1.455,8,0l8,8Z" fill="#fff" />
        </SvgIcon>
    );
}

export function NavToggleIcon(props) {
    return (
        <SvgIcon {...props} width="24px" height="24px" viewBox="0 0 24 24" style={{ fill: "white" }}>
            <g>
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
            </g>
        </SvgIcon>
    );
}