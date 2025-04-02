export async function deleteImagesFromCloudinary(images: { public_id: string }[]) {
    try {
        await Promise.all(
            images.map(async (img) => {
                if (img.public_id) {
                    const response = await fetch("/api/cloudinary", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ public_id: img.public_id }),
                    });

                    const data = await response.json();
                    if (!response.ok) {
                        throw new Error(data.error || "Error al eliminar imagen de Cloudinary");
                    }
                }
            })
        );
    } catch (error) {
        console.error("Error al eliminar imágenes de Cloudinary:", error);
        throw new Error("Error al eliminar imágenes de Cloudinary");
    }
}
