import { Media } from "../models/index.js";

export const createMedia = async (req, res) => {
    try {
        const media = await Media.create(req.body);
        res.status(201).json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getAllMedia = async (req, res) => {
    try {
        const media = await Media.findAll();
        res.status(200).json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getMediaById = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);
        if (!media) {
            return res.status(404).json({
                message: "Media not found"
            });
        }
        res.status(200).json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateMedia = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Media not found' });
        }

        await media.update(req.body);
        res.status(200).json(media);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteMedia = async (req, res) => {
    try {
        const media = await Media.findByPk(req.params.id);
        if (!media) {
            return res.status(404).json({ message: 'Media not found' });
        }

        await media.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
