import cv2

# COnfigurable Parameters
source= "giftbox.png"
destination = "newImage.png"
scale_percent=50

src=cv2.imread(source, cv2.IMREAD_UNCHANGED)


# Calculate hte 50 percent of original dimensions
newWidth = int(src.shape[1] * scale_percent/100)
newHeight = int(src.shape[0] * scale_percent/100)

# Resize Image
output = cv2.resize(src, (newWidth, newHeight))

cv2.imwrite(destination, output)
cv2.waitKey(0)