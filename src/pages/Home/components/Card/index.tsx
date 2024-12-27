import { CardItemStyle, CardStyle, TextCardItemStyle, TextCardItemValueStyle } from './style';
import { formatValue } from '../../../../utils/format_value';
import { IconType } from 'react-icons';


interface CardProps {
    value: number;
    title: string;
    icon: IconType;
    colorIcon: string;
    fontSizeIcon: number;
    backgroundColor?: string;
    colorText?: string;
}

function Card({ title, value, colorIcon, fontSizeIcon, backgroundColor = '#fff', colorText = '#363f5f', icon: Icon }: CardProps) {
    return (
        <CardStyle style={{ backgroundColor: backgroundColor }}>
            <CardItemStyle>
                <TextCardItemStyle style={{ color: colorText }}>{title}</TextCardItemStyle>
                <Icon fontSize={fontSizeIcon} color={colorIcon} />
            </CardItemStyle>
            <TextCardItemValueStyle style={{ color: colorText }}>{formatValue(value)}</TextCardItemValueStyle>
        </CardStyle>
    );
}

export default Card;
