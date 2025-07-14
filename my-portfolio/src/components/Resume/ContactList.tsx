import { MapPin, Smartphone, Mail } from 'lucide-react'
import { Contact } from '@/types'

const ContactList = ({ content }: { content: Contact }) => {
    function getIcon() {
        switch (content?.icon) {
            case 'MapPin':
                return <MapPin size={21} />
            case 'Smartphone':
                return <Smartphone size={21} />
            case 'Mail':
                return <Mail size={21} />
            default:
                return null
        }
    }

    return (
        <div className="flex sm:justify-between sm:items-center py-2 sm:mb-0 sm:max-w-[200px] text-left">
            <div className="mr-2">{getIcon()}</div>
            <h5 className="text-sm">{content.contact_data}</h5>
        </div>
    )
}
export default ContactList
