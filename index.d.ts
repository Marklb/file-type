declare module "file-type" {
	export interface IFileTypeInfo {
		/**
		 * One of the supported file types
		 *
		 * Supported file types:
		 * 	jpg
		 * 	png
		 * 	gif
		 * 	webp
		 * 	flif
		 * 	cr2
		 * 	tif
		 * 	bmp
		 * 	jxr
		 * 	psd
		 * 	zip
		 * 	tar
		 * 	rar
		 * 	gz
		 * 	bz2
		 * 	7z
		 * 	dmg
		 * 	mp4
		 * 	m4v
		 * 	mid
		 * 	mkv
		 * 	webm
		 * 	mov
		 * 	avi
		 * 	wmv
		 * 	mpg
		 * 	mp2
		 * 	mp3
		 * 	m4a
		 * 	ogg
		 * 	opus
		 * 	flac
		 * 	wav
		 * 	qcp
		 * 	amr
		 * 	pdf
		 * 	epub
		 * 	mobi - Mobipocket
		 * 	exe
		 * 	swf
		 * 	rtf
		 * 	woff
		 * 	woff2
		 * 	eot
		 * 	ttf
		 * 	otf
		 * 	ico
		 * 	flv
		 * 	ps
		 * 	xz
		 * 	sqlite
		 * 	nes
		 * 	crx
		 * 	xpi
		 * 	cab
		 * 	deb
		 * 	ar
		 * 	rpm
		 * 	Z
		 * 	lz
		 * 	msi
		 * 	mxf
		 * 	mts
		 * 	wasm
		 * 	blend
		 * 	bpg
		 * 	docx
		 * 	pptx
		 * 	xlsx
		 * 	3gp
		 * 	jp2 - JPEG 2000
		 * 	jpm - JPEG 2000
		 * 	jpx - JPEG 2000
		 * 	mj2 - Motion JPEG 2000
		 * 	aif
		 * 	odt - OpenDocument for word processing
		 * 	ods - OpenDocument for spreadsheets
		 * 	odp - OpenDocument for presentations
		 * 	xml
		 * 	heic
		 * 	cur
		 * 	ktx
		 * 	ape - Monkey's Audio
		 * 	wv - WavPack
		 * 	asf - Advanced Systems Format
		 * 	wma - Windows Media Audio
		 * 	wmv - Windows Media Video
		 * 	dcm - DICOM Image File
		 * 	mpc - Musepack (SV7 & SV8)
		 * 	ics - iCalendar
		 */
		ext: string,
		/**
		 * The MIME type
		 */
		mime: string
	}

	export const minimumBytes: number

	export default function typeType(input: Uint8Array | Buffer): IFileTypeInfo | null

}
