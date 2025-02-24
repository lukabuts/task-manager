import { useForm, usePage } from "@inertiajs/react";
import SectionHeader from "./SectionHeader";
import { PlusIcon, UserIcon } from "lucide-react";
import { Button } from "@/Components/ui/button";
import SubmitFormBtn from "./SubmitFormBtn";
import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import { memo, useRef, useState } from "react";
import DeleteProfilePicture from "./DeleteProfilePicture";
import { ProfilePartialProps } from "@/types/global";

const ProfilePhoto = ({ className, translations }: ProfilePartialProps) => {
    const user = usePage().props.auth.user;
    const [previewImage, setPreviewImage] = useState("");
    const [imgError, setImgError] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const {
        data,
        setData,
        errors,
        post,
        reset,
        processing,
        recentlySuccessful,
    } = useForm<{ photo: File | null }>({
        photo: null,
    });

    function updateProfilePicture(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        post(route("profile.picture.update"), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                setPreviewImage("");
                setImgError("");
            },
            onError: () => {
                console.log(errors);
            },
        });
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        if (file) {
            const allowedTypes = [
                "image/jpeg",
                "image/png",
                "image/jpg",
                "image/webp",
            ];

            if (file.size > 1048576) {
                setImgError("The photo may not be greater than 1MB.");
                return;
            }

            if (!allowedTypes.includes(file.type)) {
                setImgError(
                    "Invalid file type. Only JPEG, PNG, JPG, and WEBP are allowed."
                );
                return;
            }
            setData("photo", file);
            setImgError("");
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section className={className}>
            <SectionHeader
                title={translations.setting_page.profile_photo.title}
                description={
                    translations.setting_page.profile_photo.description
                }
            />
            <form onSubmit={updateProfilePicture}>
                <div className="flex lg:gap-6 gap-4 items-center my-4 lg:my-6">
                    <div className="size-40 max-xl:size-32 shrink-0 border dark:border-gray-700 rounded-2xl overflow-hidden">
                        {previewImage ? (
                            <img
                                src={previewImage}
                                alt={`${user.name}'s profile picture`}
                                className="w-full h-full object-cover"
                            />
                        ) : user.photo ? (
                            <img
                                src={user.photo}
                                alt={`${user.name}'s profile picture`}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <UserIcon className="w-full h-full" />
                        )}
                    </div>
                    <div className="space-y-3 max-lg:space-y-2">
                        <div className="flex gap-4 lg:items-center max-lg:flex-col">
                            <Button
                                type="button"
                                className="bg-transparent border-2 rounded-2xl relative overflow-hidden dark:border-gray-100 text-gray-400 hover:text-white"
                                onClick={() => {
                                    fileInputRef.current?.click();
                                }}
                            >
                                <PlusIcon className="max-sm:hidden" />
                                <span>
                                    {
                                        translations.setting_page.profile_photo
                                            .upload_photo
                                    }
                                </span>
                                <input
                                    onChange={handleImageChange}
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.webp"
                                    className="hidden"
                                    value={""}
                                    title=""
                                    ref={fileInputRef}
                                />
                            </Button>
                            {data.photo && (
                                <DangerButton
                                    onClick={() => {
                                        setData("photo", null);
                                        setPreviewImage("");
                                        setImgError("");
                                    }}
                                >
                                    <span className="w-full">
                                        {
                                            translations.setting_page
                                                .profile_photo.clear_photo
                                        }
                                    </span>
                                </DangerButton>
                            )}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                            <span>
                                {
                                    translations.setting_page.profile_photo
                                        .supported_formats
                                }
                                : JPEG, PNG, JPG, {translations.and} WEBP <br />
                                {
                                    translations.setting_page.profile_photo
                                        .max_size
                                }{" "}
                                : 1MB
                            </span>
                        </div>
                        <InputError message={errors.photo || imgError} />
                    </div>
                </div>
                <div className="flex gap-4 items-center">
                    <SubmitFormBtn
                        disabled={!data.photo}
                        processing={processing}
                        recentlySuccessful={recentlySuccessful}
                    />
                    {user.photo && <DeleteProfilePicture />}
                </div>
            </form>
        </section>
    );
};

export default memo(ProfilePhoto);
