import * as yup from "yup"

const formats = ['image/jpg', 'image/jpeg', 'image/png'];

export const taskSchema = yup.object({
    title: yup.string().required(),
    image: yup.mixed()
        .test('fileSize',
            'Arquivo muito grande', (value) => (
                value && value[0].size <= 2000000 //2MB
            ))

        .test('format',
            'Formato não suportado', (value) => (
                value[0] && formats.includes(value[0].type)
            )),
})