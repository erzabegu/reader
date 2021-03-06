import React, { useState } from 'react';
import { Icon, Image, Input } from 'reader/atoms';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { RenderImageWrapper } from './styled';
import { EditImageDialog } from '../EditImageDialog';

interface Props {
    item: any;
    handleUpdate?(passedItem: any): void;
}

const RenderImage = ({ item, handleUpdate }: Props) => {

    const hiddenFileInput = React.useRef<HTMLInputElement>(null)
    const [edit, setEdit] = useState<boolean>(false)
    const [height, setHeight] = useState<number>(100)
    const [width, setWidth] = useState<number>(100)

    const handleClick = (e: any) => {
        hiddenFileInput.current.click();
    };

    //refactor qitu me qit funksionin jasht
    const imageHandler = (e: any) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                handleUpdate({ ...item, src: reader.result })
            }
        }
        reader.readAsDataURL(e.target.files[0])
    };

    return <RenderImageWrapper>
        {!item.src ? <><Icon iconName={<UploadFileIcon />} onClick={handleClick} />
            <Input
                ref={hiddenFileInput}
                type="file"
                display={"none"}
                accept={"image/png, image/jpeg"}
                onChange={imageHandler} />
        </> : <Image src={item.src} height={item.height ? item.height : height} width={item.width ? item.width : width} onClick={() => setEdit(!edit)} />}
        <EditImageDialog edit={edit} item={item} handleUpdate={handleUpdate} />
    </RenderImageWrapper>
}

export default RenderImage